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
| levelIndex             | [AntRef](/vext/ref/fb/antref/) |             |
| scenarioIndex          | [AntRef](/vext/ref/fb/antref/) |             |
| actorIndex             | [AntRef](/vext/ref/fb/antref/) |             |
| partIndex              | [AntRef](/vext/ref/fb/antref/) |             |
| triggerCannedAnimation | [AntRef](/vext/ref/fb/antref/) |             |
| exitCannedAnimation    | [AntRef](/vext/ref/fb/antref/) |             |
| externalTime           | [AntRef](/vext/ref/fb/antref/) |             |
| blendValue             | [AntRef](/vext/ref/fb/antref/) |             |
| advanceScenario        | [AntRef](/vext/ref/fb/antref/) |             |
| enteredLoop            | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding/) | [Clone](#clone) |            |

### Clone

> [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
