---
title: StaticModelGroupMemberData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| StaticModelGroupMemberData()                                 | Create a new instance of this structure type.            |
| StaticModelGroupMemberData(StaticModelGroupMemberData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                        | Type                                                        | Description |
| --------------------------- | ----------------------------------------------------------- | ----------- |
| instanceTransforms          | [LinearTransform](/vext/ref/shared/class/lineartransform)\[\] |             |
| instanceScale               | number\[\]                                                  |             |
| instanceObjectVariation     | number\[\]                                                  |             |
| instanceCastSunShadow       | bool\[\]                                                    |             |
| memberType                  | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)              |             |
| meshEntityType              | [EntityData](/vext/ref/fb/entitydata/)                                    |             |
| instanceCount               | number                                                      |             |
| healthStateEntityManagerId  | number                                                      |             |
| physicsPartRange            | [IndexRange](/vext/ref/fb/indexrange/)                                    |             |
| physicsPartCountPerInstance | number                                                      |             |
| networkIdRange              | [IndexRange](/vext/ref/fb/indexrange/)                                    |             |
| networkIdCountPerInstance   | number                                                      |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata/) | [Clone](#clone) |            |

### Clone

> [StaticModelGroupMemberData](/vext/ref/fb/staticmodelgroupmemberdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
