---
title: BoolRecordingData
---

Inherits from [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata)

## Summary

### Constructors

|  |
| --- |
| **[BoolRecordingData](#constructor-0)**() |
| **[BoolRecordingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BoolRecordingData](#constructor-2)**(other: [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata)) |
| **[BoolRecordingData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "values" >}} | bool[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BoolRecordingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BoolRecordingData {#constructor-0}

> **BoolRecordingData**()

Creates a new [BoolRecordingData](/vext/ref/fb/boolrecordingdata) frostbite instance.

### BoolRecordingData {#constructor-1}

> **BoolRecordingData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BoolRecordingData](/vext/ref/fb/boolrecordingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BoolRecordingData {#constructor-2}

> **BoolRecordingData**(other: [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata))

Casts an instance of type [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata) to [BoolRecordingData](/vext/ref/fb/boolrecordingdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata) | The instance to cast to [BoolRecordingData](/vext/ref/fb/boolrecordingdata). |

### BoolRecordingData {#constructor-3}

> **BoolRecordingData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BoolRecordingData](/vext/ref/fb/boolrecordingdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BoolRecordingData](/vext/ref/fb/boolrecordingdata). |

## Properties

### {{% prop-heading "values" %}}

> **bool**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BoolRecordingData](/vext/ref/fb/boolrecordingdata) type.

