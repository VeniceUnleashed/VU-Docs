---
title: AntMemorySettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AntMemorySettings()                                                          | Create a new instance of this container type.                                                                             |
| AntMemorySettings(AntMemorySettings other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AntMemorySettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AntMemorySettings](AntMemorySettings). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| rtPoolLayersControllers        | number |             |
| rtPoolStateflowControllers     | number |             |
| rtPoolStateflowNodeControllers | number |             |
| rtPoolTransitionControllers    | number |             |
| rtPoolClipControllers          | number |             |
| rtPoolChooserControllers       | number |             |
| rtPoolLoopingControllers       | number |             |
| rtPoolTransparentControllers   | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AntMemorySettings](AntMemorySettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AntMemorySettings](AntMemorySettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
