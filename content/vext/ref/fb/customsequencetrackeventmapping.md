---
title: CustomSequenceTrackEventMapping
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[CustomSequenceTrackEventMapping](#constructor-0)**() |
| **[CustomSequenceTrackEventMapping](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CustomSequenceTrackEventMapping](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "trackEventID" >}} | int |
| {{< prop "sequenceEventID" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CustomSequenceTrackEventMapping" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CustomSequenceTrackEventMapping {#constructor-0}

> **CustomSequenceTrackEventMapping**()

Creates a new [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping) frostbite instance.

### CustomSequenceTrackEventMapping {#constructor-1}

> **CustomSequenceTrackEventMapping**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CustomSequenceTrackEventMapping {#constructor-2}

> **CustomSequenceTrackEventMapping**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping). |

## Properties

### {{% prop-heading "trackEventID" %}}

> **int**

### {{% prop-heading "sequenceEventID" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CustomSequenceTrackEventMapping](/vext/ref/fb/customsequencetrackeventmapping) type.

