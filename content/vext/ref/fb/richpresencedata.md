---
title: RichPresenceData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| RichPresenceData()                                                          | Create a new instance of this container type.                                                                           |
| RichPresenceData(RichPresenceData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| RichPresenceData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [RichPresenceData](/vext/ref/fb/richpresencedata/).                                      |
| RichPresenceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RichPresenceData](/vext/ref/fb/richpresencedata/). |

## Properties

| Name          | Type                                                         | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| presenceModes | [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring/)\[\] |             |
| defaultMode   | [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring/)     |             |
| inactiveMode  | [RichPresencePresenceString](/vext/ref/fb/richpresencepresencestring/)     |             |
| contexts      | [RichPresenceContext](/vext/ref/fb/richpresencecontext/)\[\]               |             |
| properties    | [RichPresenceProperty](/vext/ref/fb/richpresenceproperty/)\[\]             |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [RichPresenceData](/vext/ref/fb/richpresencedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RichPresenceData](/vext/ref/fb/richpresencedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
