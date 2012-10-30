//
//  ATBFlipsideViewController.h
//  TicektControl
//
//  Created by Jørn Tangen on 4/24/12.
//  Copyright (c) 2012 Wtw AS. All rights reserved.
//

#import <UIKit/UIKit.h>

@class ATBFlipsideViewController;

@protocol ATBFlipsideViewControllerDelegate
- (void)flipsideViewControllerDidFinish:(ATBFlipsideViewController *)controller;
@end

@interface ATBFlipsideViewController : UIViewController

@property (weak, nonatomic) IBOutlet id <ATBFlipsideViewControllerDelegate> delegate;

- (IBAction)done:(id)sender;

@end
