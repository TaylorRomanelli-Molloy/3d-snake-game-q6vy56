import WorldModel from './WorldModel';
interface View
{
  display : (wm : WorldModel) =>  void;
}
export default View;
