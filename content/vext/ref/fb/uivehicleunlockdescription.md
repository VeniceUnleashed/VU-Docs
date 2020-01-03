---
title: UIVehicleUnlockDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UIVehicleUnlockDescription()                                                          | Create a new instance of this container type.                                                                                               |
| UIVehicleUnlockDescription(UIVehicleUnlockDescription other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UIVehicleUnlockDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UIVehicleUnlockDescription](/vext/ref/fb/uivehicleunlockdescription/).              |
| UIVehicleUnlockDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIVehicleUnlockDescription](/vext/ref/fb/uivehicleunlockdescription/). |

## Properties

| Name                     | Type   | Description |
| ------------------------ | ------ | ----------- |
| name                     | string |             |
| description              | string |             |
| category                 | string |             |
| texturePath              | string |             |
| iconTexturePath          | string |             |
| unlockTexturePath        | string |             |
| hiddenInProgression      | bool   |             |
| notExplicitelySelectable | bool   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIVehicleUnlockDescription](/vext/ref/fb/uivehicleunlockdescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIVehicleUnlockDescription](/vext/ref/fb/uivehicleunlockdescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
