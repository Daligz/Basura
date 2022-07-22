import 'package:flutter/material.dart';
import 'package:movil_app/screens/Profile/components/background.dart';
import 'package:movil_app/screens/rewards/components/reward_container.dart';

class ReportBody extends StatelessWidget {

  const ReportBody({Key? key}) : super(key: key);

  @override
  Widget build(final BuildContext context) {
    return Background(
      child: SingleChildScrollView(
        child: Column(
          children: const <Widget> [
            RewardContainer()
          ],
        ),
      ),
    );
  }
}