---
title: WindowSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| WindowSettings()                                                          | Create a new instance of this container type.                                                                       |
| WindowSettings(WindowSettings other)                                      | Create a reference copy of an instance of the same type.                                                            |
| WindowSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [WindowSettings](/vext/ref/fb/windowsettings/).                    |
| WindowSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WindowSettings](/vext/ref/fb/windowsettings/). |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| posX                        | number |             |
| posY                        | number |             |
| width                       | number |             |
| height                      | number |             |
| bordersEnable               | bool   |             |
| autoSize                    | bool   |             |
| fullscreenAutoSize          | bool   |             |
| fullscreenWhenJoiningServer | bool   |             |
| enableEscape                | bool   |             |
| enableInputOnActivate       | bool   |             |
| hibernateOnClose            | bool   |             |
| hidden                      | bool   |             |
| minimized                   | bool   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [WindowSettings](/vext/ref/fb/windowsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WindowSettings](/vext/ref/fb/windowsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
