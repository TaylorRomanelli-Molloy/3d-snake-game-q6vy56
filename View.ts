import WorldModel from './WorldModel';
interface View
{
  display : (wm : WorldModel) =>  void;
  dispose:()=>void;
}
export default View;
