import { mount } from "@vue/test-utils";
import NavBarLocation from "@/components/NavBar/components/NavBarLocation.vue";
describe("NavBarLocation.vue",()=>{
    it("Check Location Name Value",()=>{
        const wrapper = mount(NavBarLocation,{
            data(){
                return {
                    fields:{location:"Algiers"}
                }
            }
        }
     );
    expect(wrapper.find(".current-location").text()).toContain("Algiers")
  }),
  it("Check Location name after delete",async()=>{
    const wrapper = mount(NavBarLocation,{
        data(){
            return {
                fields:{location:"Algiers"}
            }
        }
    }
     );
     const deleteLocation = await wrapper.find("#delete-location").trigger("click");
     expect(wrapper.vm.fields.location).toEqual(null);
  })
})