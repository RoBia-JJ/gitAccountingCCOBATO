const expense = {
  template: `

  <div class="container mx-auto mt-4 border-base-300 border-2 rounded-lg p-4 shadow-lg" v-if="currentpage">
  <div class="text-center mb-4"><p class="text-[2rem] font-bold">ບັນຊີປະຈຳວັນ ລາຍຮັບ-ລາຍຈ່າຍ </p></div>

  // Page1
  <div class=" justify-end flex gap-2 mb-4">
  <div><button class="btn btn-soft btn-primary" @click="">ສ້າງໃໝ່</button></div>
  <button class="btn btn-outline btn-warning">ເລືອກ</button>
  <div><button class="btn btn-primary">xxxxxxxxx</button></div>
  </div>
  

    <div class="overflow-x-auto ">
  <table class="table">
    <!-- head -->
    <thead>
      <tr class="bg-blue-100 ">
        <th class="text-center text-lg font-bold">Voucher No.</th>
        <th class="text-center text-lg font-bold">Submit Date</th>
        <th class="text-center text-lg font-bold">Submit By</th>
        <th class="text-center text-lg font-bold">Description</th>
        <th class="text-center text-lg font-bold">Acc No</th>
        <th class="text-center text-lg font-bold">Currency</th>
        <th class="text-center text-lg font-bold">Amount</th>
        <th class="text-center text-lg font-bold">Remark</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-base-300">
        <th class="text-center">2</th>
        <td class="text-center">Hart Hagerty</td>
        <td class="text-center">Desktop Support Technician</td>
        <td class="text-center">Purple</td>
        <td class="text-center">Purple</td>
        <td class="text-center">Purple</td>
        <td class="text-center">Purple</td>
        <td class="text-center">Purple</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  // Page1



 // Page2
<div v-else="this.create"><p></p>create<p></div>
 // Page2

 <script>
    export default {
      data() {
        return {
          currentpage : true,
          

    },
    methods: {
      changepahe(){
      if(this.currentpage == true){
        
      


      
      }



    </script>
    `

   
}