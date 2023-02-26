
Vue.use(VueTables.ClientTable);


var app = new Vue({
    el:'#app',
    data: {
        qa_dataset : [],
        columns: ['question', 'context', 'answer'],
        options: {
          headings: {
            question: 'Question',
            context: 'Context',
            answer: 'Answer',
          },
        }
    },
    methods:{
        submit: function () {

            question = this.$refs.question.value.replace(/(\r\n|\n|\r)/gm, "").replace(',', '')
            context = this.$refs.context.value.replace(/(\r\n|\n|\r)/gm, "").replace(',', '')
            answer = this.$refs.answer.value.replace(/(\r\n|\n|\r)/gm, "").replace(',', '')

            qa_object = {
                question:question,
                context:context,
                answer:answer
            }

            this.qa_dataset.push(qa_object)

            this.$refs.question.value = ''
            this.$refs.answer.value = ''
            this.$refs.context.value = ''
            this.$refs.question.focus()

            this.$forceUpdate();
        },
        download: function(){
            exportCSVFile(
                this.qa_dataset,
                'qadataset.csv'
            )
        }
    }
  })