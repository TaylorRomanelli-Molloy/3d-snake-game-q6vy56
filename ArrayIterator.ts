

class ArrayIterator
{
  private arr;
  private index: number;

  constructor()
  {
    this.index = 0; 
  }
  next(start: number):object
  {
    for(let i = 0; i < length; i++)
    {   
      return {value: this.index, done: false};    
    }
    return {value: this.index, done: true}; 
    
  }

}
export default ArrayIterator;