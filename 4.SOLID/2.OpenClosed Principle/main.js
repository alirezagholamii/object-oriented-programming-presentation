public function drawAllShapes($shapes) {
    for ($i = 0; $i < count($shapes); $i++) {
        $shape = $shapes[$i];
        switch ($shape->type) {
            case "square":
                $this->drawSquare($shape);
                break;
            case "circle":
                $this->drawCircle($shape);
                break;
        }
    }
}




/*

interface Shape {
    public function draw();
}

class Square implements Shape {
    public function draw()
    {
        // Draw Square Here
        echo "square";
    }
}

class Circle implements Shape {
    public function draw()
    {
        // Draw Circle Here
        echo "circle";
    }
}

class Draw {
    public function drawAllShapes($shapes) {
        for ($i = 0 ; $i < count($shapes) ; $i++)
            $shapes[$i]->draw();
    }
}

$draw = new Draw();
$square = new Square();
$circle = new Circle();
$shapes = array($square , $circle);
$draw->drawAllShapes($shapes);
*/