const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    scene: {
      preload: preload,
      create: create
    }
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
    this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
  }
  
  function create() {
    this.add.image(400, 300, 'logo');
    this.add.text(200, 500, 'Hospital Simulation', { font: '32px Arial', fill: '#000' });
  }