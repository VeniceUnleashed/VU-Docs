---
title: DataCopValueSetting
---

## Summary

### Constructors

|  |
| --- |
| **[DataCopValueSetting](#constructor-0)**() |
| **[DataCopValueSetting](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dataKey" >}} | int |
| {{< prop "frameSpacing" >}} | int |
| {{< prop "offset" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DataCopValueSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DataCopValueSetting {#constructor-0}

> **DataCopValueSetting**()

Creates a new [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting) frostbite instance.

### DataCopValueSetting {#constructor-1}

> **DataCopValueSetting**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "dataKey" %}}

> **int**

### {{% prop-heading "frameSpacing" %}}

> **int**

### {{% prop-heading "offset" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataCopValueSetting](/vext/ref/fb/datacopvaluesetting)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting) type.

