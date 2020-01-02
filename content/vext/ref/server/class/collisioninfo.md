---
title: CollisionInfo
---
## Description

## Constructors

| Constructor                                                                                                      | Description                                              |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [CollisionInfo](/vext/ref/server/class/collisioninfo)()                                                            |                                                          |
| [CollisionInfo](/vext/ref/server/class/collisioninfo)([CollisionInfo](/vext/ref/server/class/collisioninfo) **ref**) | Create a reference copy of an instance of the same type. |

## Properties

| Name                    | Type                                                | Writable | Description |
| ----------------------- | --------------------------------------------------- | -------- | ----------- |
| entity                  | [entity](/vext/ref/shared/class/entity)               | Y        |             |
| material                | [DataContainer](/vext/ref/shared/class/datacontainer) | Y        |             |
| ownMaterial             | [DataContainer](/vext/ref/shared/class/datacontainer) | Y        |             |
| position                | [Vec3](/vext/ref/shared/class/vec3)                   | Y        |             |
| normal                  | [Vec3](/vext/ref/shared/class/vec3)                   | Y        |             |
| speed                   | float                                               | Y        |             |
| part                    | int                                                 | Y        |             |
| isInstantlyDestructible | bool                                                | Y        |             |
