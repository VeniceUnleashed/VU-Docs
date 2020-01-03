---
title: AntMemorySettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AntMemorySettings()                                                          | Create a new instance of this container type.                                                                             |
| AntMemorySettings(AntMemorySettings other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AntMemorySettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntMemorySettings](/vext/ref/fb/antmemorysettings/). |

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
| [AntMemorySettings](/vext/ref/fb/antmemorysettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntMemorySettings](/vext/ref/fb/antmemorysettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
