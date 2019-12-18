---
title: UIWeaponAccessoryDescription (Frostbite Container)
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| UIWeaponAccessoryDescription()                                                          | Create a new instance of this container type.                                                                                                   |
| UIWeaponAccessoryDescription(UIWeaponAccessoryDescription other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| UIWeaponAccessoryDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UIWeaponAccessoryDescription](UIWeaponAccessoryDescription).              |
| UIWeaponAccessoryDescription([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIWeaponAccessoryDescription](UIWeaponAccessoryDescription). |

## Properties

| Name                | Type   | Description |
| ------------------- | ------ | ----------- |
| name                | string |             |
| description         | string |             |
| category            | string |             |
| texturePath         | string |             |
| iconTexturePath     | string |             |
| unlockTexturePath   | string |             |
| miscTexturePath     | string |             |
| coreAccessory       | bool   |             |
| hiddenInProgression | bool   |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIWeaponAccessoryDescription](UIWeaponAccessoryDescription) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIWeaponAccessoryDescription](UIWeaponAccessoryDescription) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
