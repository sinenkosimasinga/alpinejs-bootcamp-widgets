document.addEventListener('alpine:init',()=>{
    Alpine.data('enoughairtime',function(){
        return{
            item:'',
            airtime:'0.00',
            airtimeMessage:'',
            Calculate(){
               this.airtimeMessage= enoughAirtime(this.item, this.airtime)
               setTimeout(()=>{
                this.airtimeMessage='';
            },3000);
            }
        }
    });
})