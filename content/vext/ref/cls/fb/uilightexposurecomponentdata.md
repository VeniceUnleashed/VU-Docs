---
title: UILightExposureComponentData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| UILightExposureComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| UILightExposureComponentData(UILightExposureComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| UILightExposureComponentData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UILightExposureComponentData](UILightExposureComponentData).                  |
| UILightExposureComponentData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UILightExposureComponentData](UILightExposureComponentData).                                      |
| UILightExposureComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UILightExposureComponentData](UILightExposureComponentData). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UILightExposureComponentData](UILightExposureComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UILightExposureComponentData](UILightExposureComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
