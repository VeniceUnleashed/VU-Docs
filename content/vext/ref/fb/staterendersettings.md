---
title: StateRenderSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| StateRenderSettings()                                                          | Create a new instance of this container type.                                                                                 |
| StateRenderSettings(StateRenderSettings other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| StateRenderSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StateRenderSettings](/vext/ref/fb/staterendersettings/). |

## Properties

| Name                          | Type | Description |
| ----------------------------- | ---- | ----------- |
| ps3PixelShaderConstantsEnable | bool |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [StateRenderSettings](/vext/ref/fb/staterendersettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StateRenderSettings](/vext/ref/fb/staterendersettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
