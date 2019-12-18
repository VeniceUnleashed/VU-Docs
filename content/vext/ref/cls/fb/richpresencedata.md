---
title: RichPresenceData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| RichPresenceData()                                                          | Create a new instance of this container type.                                                                           |
| RichPresenceData(RichPresenceData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| RichPresenceData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [RichPresenceData](RichPresenceData).                                      |
| RichPresenceData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RichPresenceData](RichPresenceData). |

## Properties

| Name          | Type                                                         | Description |
| ------------- | ------------------------------------------------------------ | ----------- |
| presenceModes | [RichPresencePresenceString](RichPresencePresenceString)\[\] |             |
| defaultMode   | [RichPresencePresenceString](RichPresencePresenceString)     |             |
| inactiveMode  | [RichPresencePresenceString](RichPresencePresenceString)     |             |
| contexts      | [RichPresenceContext](RichPresenceContext)\[\]               |             |
| properties    | [RichPresenceProperty](RichPresenceProperty)\[\]             |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [RichPresenceData](RichPresenceData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RichPresenceData](RichPresenceData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
