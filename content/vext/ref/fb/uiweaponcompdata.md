---
title: UIWeaponCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UIWeaponCompData()                                                          | Create a new instance of this container type.                                                                           |
| UIWeaponCompData(UIWeaponCompData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UIWeaponCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIWeaponCompData](/vext/ref/fb/uiweaponcompdata/).                  |
| UIWeaponCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIWeaponCompData](/vext/ref/fb/uiweaponcompdata/).                                      |
| UIWeaponCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIWeaponCompData](/vext/ref/fb/uiweaponcompdata/). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| minHitIndicatorLimit    | number |             |
| maxHitIndicatorLimit    | number |             |
| normalHitIndicatorLimit | number |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UIWeaponCompData](/vext/ref/fb/uiweaponcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIWeaponCompData](/vext/ref/fb/uiweaponcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
