
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

            question = this.$refs.question.value
            context = this.$refs.context.value
            answer = this.$refs.answer.value

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