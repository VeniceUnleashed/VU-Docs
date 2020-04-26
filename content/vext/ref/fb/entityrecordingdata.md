---
title: EntityRecordingData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[EntityRecordingData](#constructor-0)**() |
| **[EntityRecordingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EntityRecordingData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entityGuid" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "data" >}} | [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EntityRecordingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EntityRecordingData {#constructor-0}

> **EntityRecordingData**()

Creates a new [EntityRecordingData](/vext/ref/fb/entityrecordingdata) frostbite instance.

### EntityRecordingData {#constructor-1}

> **EntityRecordingData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EntityRecordingData](/vext/ref/fb/entityrecordingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EntityRecordingData {#constructor-2}

> **EntityRecordingData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EntityRecordingData](/vext/ref/fb/entityrecordingdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EntityRecordingData](/vext/ref/fb/entityrecordingdata). |

## Properties

### {{% prop-heading "entityGuid" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "data" %}}

> **[PropertyRecordingData](/vext/ref/fb/propertyrecordingdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EntityRecordingData](/vext/ref/fb/entityrecordingdata) type.

