//
//  ATBMainViewController.h
//  TicektControl
//
//  Created by Jørn Tangen on 4/24/12.
//  Copyright (c) 2012 Wtw AS. All rights reserved.
//

#import "ATBFlipsideViewController.h"

@interface ATBMainViewController : UIViewController <ATBFlipsideViewControllerDelegate, UIPopoverControllerDelegate>

@property (strong, nonatomic) UIPopoverController *flipsidePopoverController;

@end
