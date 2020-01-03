---
title: UIVehicleCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIVehicleCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIVehicleCompData(UIVehicleCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIVehicleCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIVehicleCompData](/vext/ref/fb/uivehiclecompdata/).                  |
| UIVehicleCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIVehicleCompData](/vext/ref/fb/uivehiclecompdata/).                                      |
| UIVehicleCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIVehicleCompData](/vext/ref/fb/uivehiclecompdata/). |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| rangeMeterUpdatesPerSecond | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIVehicleCompData](/vext/ref/fb/uivehiclecompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIVehicleCompData](/vext/ref/fb/uivehiclecompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
