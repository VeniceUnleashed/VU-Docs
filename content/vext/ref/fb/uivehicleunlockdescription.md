---
title: UIVehicleUnlockDescription
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UIVehicleUnlockDescription()                                                          | Create a new instance of this container type.                                                                                               |
| UIVehicleUnlockDescription(UIVehicleUnlockDescription other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UIVehicleUnlockDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UIVehicleUnlockDescription](UIVehicleUnlockDescription).              |
| UIVehicleUnlockDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIVehicleUnlockDescription](UIVehicleUnlockDescription). |

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
| [UIVehicleUnlockDescription](UIVehicleUnlockDescription) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIVehicleUnlockDescription](UIVehicleUnlockDescription) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
