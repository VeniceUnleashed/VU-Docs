---
title: RecordedInputData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[RecordedInputData](#constructor-0)**() |
| **[RecordedInputData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RecordedInputData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[RecordedInputData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "trackData" >}} | [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RecordedInputData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RecordedInputData {#constructor-0}

> **RecordedInputData**()

Creates a new [RecordedInputData](/vext/ref/fb/recordedinputdata) frostbite instance.

### RecordedInputData {#constructor-1}

> **RecordedInputData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RecordedInputData](/vext/ref/fb/recordedinputdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RecordedInputData {#constructor-2}

> **RecordedInputData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [RecordedInputData](/vext/ref/fb/recordedinputdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [RecordedInputData](/vext/ref/fb/recordedinputdata). |

### RecordedInputData {#constructor-3}

> **RecordedInputData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RecordedInputData](/vext/ref/fb/recordedinputdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RecordedInputData](/vext/ref/fb/recordedinputdata). |

## Properties

### {{% prop-heading "trackData" %}}

> **[InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RecordedInputData](/vext/ref/fb/recordedinputdata) type.

