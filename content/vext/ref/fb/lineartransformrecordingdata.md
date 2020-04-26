---
title: LinearTransformRecordingData
---

Inherits from [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata)

## Summary

### Constructors

|  |
| --- |
| **[LinearTransformRecordingData](#constructor-0)**() |
| **[LinearTransformRecordingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LinearTransformRecordingData](#constructor-2)**(other: [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata)) |
| **[LinearTransformRecordingData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "values" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LinearTransformRecordingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LinearTransformRecordingData {#constructor-0}

> **LinearTransformRecordingData**()

Creates a new [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata) frostbite instance.

### LinearTransformRecordingData {#constructor-1}

> **LinearTransformRecordingData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LinearTransformRecordingData {#constructor-2}

> **LinearTransformRecordingData**(other: [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata))

Casts an instance of type [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata) to [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata) | The instance to cast to [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata). |

### LinearTransformRecordingData {#constructor-3}

> **LinearTransformRecordingData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata). |

## Properties

### {{% prop-heading "values" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LinearTransformRecordingData](/vext/ref/fb/lineartransformrecordingdata) type.

