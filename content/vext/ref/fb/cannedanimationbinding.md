---
title: CannedAnimationBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| CannedAnimationBinding()                             | Create a new instance of this structure type.            |
| CannedAnimationBinding(CannedAnimationBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type             | Description |
| ---------------------- | ---------------- | ----------- |
| levelIndex             | [AntRef](AntRef) |             |
| scenarioIndex          | [AntRef](AntRef) |             |
| actorIndex             | [AntRef](AntRef) |             |
| partIndex              | [AntRef](AntRef) |             |
| triggerCannedAnimation | [AntRef](AntRef) |             |
| exitCannedAnimation    | [AntRef](AntRef) |             |
| externalTime           | [AntRef](AntRef) |             |
| blendValue             | [AntRef](AntRef) |             |
| advanceScenario        | [AntRef](AntRef) |             |
| enteredLoop            | [AntRef](AntRef) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [CannedAnimationBinding](CannedAnimationBinding) | [Clone](#clone) |            |

### Clone

> [CannedAnimationBinding](CannedAnimationBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
