---
title: GeographicalData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| GeographicalData()                                                          | Create a new instance of this container type.                                                                           |
| GeographicalData(GeographicalData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| GeographicalData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GeographicalData](/vext/ref/fb/geographicaldata/). |

## Properties

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| latitude       | [UIGeoLatitude](/vext/ref/fb/uigeolatitude/)   |             |
| longitude      | [UIGeoLongitude](/vext/ref/fb/uigeolongitude/) |             |
| seaLevelOffset | number                           |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [GeographicalData](/vext/ref/fb/geographicaldata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GeographicalData](/vext/ref/fb/geographicaldata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
