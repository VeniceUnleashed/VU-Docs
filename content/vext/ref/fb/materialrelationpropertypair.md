---
title: MaterialRelationPropertyPair
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
| physicsMaterialProperties | [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/)\[\] |             |
| physicsPropertyProperties | [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/)\[\] |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair/) | [Clone](#clone) |            |

### Clone

> [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
