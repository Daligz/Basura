import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:movil_app/screens/Profile/profile_screen.dart';

class Bar extends StatelessWidget{
  final String text;
  final void Function()? press;
  const Bar({
    Key? key,
    required this.text,
    required  this.press
}) : super(key: key);

  @override
  Widget build(BuildContext context){
    Size size = MediaQuery.of(context).size;
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 15.0, vertical: 5.0),
      child: Row(
        children: <Widget>[
          IconButton(
            iconSize: 15.0,
            icon: SvgPicture.asset("assets/icons/arrow.svg"),
            onPressed: (){
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => ProfileScreen()),
              );
            },
          ),
          Row(
            children: <Widget>[
            Text(
              text,
              style: Theme.of(context).textTheme.headline4,
            ),
          ],)
        ],
      ),
    );
  }

}

