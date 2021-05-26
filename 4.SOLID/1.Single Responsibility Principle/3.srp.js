interface Modem {
    public function dial($number);
    public function hangUp();

    public function send($character);
    public function recieve();
}







interface DataChannel {
    public function send($character);
    public function recieve();
}

interface Connection {
    public function dial($number);
    public function hangUp();
}



/*

https://7learn.com/programming/solid-single-responsibility-principle
*/