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
| memberType                  | [GamePhysicsEntityData](GamePhysicsEntityData)              |             |
| meshEntityType              | [EntityData](EntityData)                                    |             |
| instanceCount               | number                                                      |             |
| healthStateEntityManagerId  | number                                                      |             |
| physicsPartRange            | [IndexRange](IndexRange)                                    |             |
| physicsPartCountPerInstance | number                                                      |             |
| networkIdRange              | [IndexRange](IndexRange)                                    |             |
| networkIdCountPerInstance   | number                                                      |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [StaticModelGroupMemberData](StaticModelGroupMemberData) | [Clone](#clone) |            |

### Clone

> [StaticModelGroupMemberData](StaticModelGroupMemberData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
