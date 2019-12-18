---
title: CollisionInfo (Client Class)
---
## Description

## Constructors

| Constructor                                                                                                      | Description                                              |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [CollisionInfo](/vext/ref/cls/clt/collisioninfo)()                                                            |                                                          |
| [CollisionInfo](/vext/ref/cls/clt/collisioninfo)([CollisionInfo](/vext/ref/cls/clt/collisioninfo) **ref**) | Create a reference copy of an instance of the same type. |

## Properties

| Name                    | Type                                                | Writable | Description |
| ----------------------- | --------------------------------------------------- | -------- | ----------- |
| entity                  | [entity](/vext/ref/cls/shr/entity)               | Y        |             |
| material                | [DataContainer](/vext/ref/cls/shr/datacontainer) | Y        |             |
| ownMaterial             | [DataContainer](/vext/ref/cls/shr/datacontainer) | Y        |             |
| position                | [Vec3](/vext/ref/cls/shr/vec3)                   | Y        |             |
| normal                  | [Vec3](/vext/ref/cls/shr/vec3)                   | Y        |             |
| speed                   | float                                               | Y        |             |
| part                    | int                                                 | Y        |             |
| isInstantlyDestructible | bool                                                | Y        |             |
