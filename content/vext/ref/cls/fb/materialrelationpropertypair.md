---
title: MaterialRelationPropertyPair (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| MaterialRelationPropertyPair()                                   | Create a new instance of this structure type.            |
| MaterialRelationPropertyPair(MaterialRelationPropertyPair other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                      | Type                                                                           | Description |
| ------------------------- | ------------------------------------------------------------------------------ | ----------- |
| physicsMaterialProperties | [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData)\[\] |             |
| physicsPropertyProperties | [PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData)\[\] |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [MaterialRelationPropertyPair](MaterialRelationPropertyPair) | [Clone](#clone) |            |

### Clone

> [MaterialRelationPropertyPair](MaterialRelationPropertyPair) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
