---
title: DataCopSettings
---

## Summary

### Constructors

|  |
| --- |
| **[DataCopSettings](#constructor-0)**() |
| **[DataCopSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "values" >}} | [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DataCopSettings](/vext/ref/fb/datacopsettings) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DataCopSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DataCopSettings {#constructor-0}

> **DataCopSettings**()

Creates a new [DataCopSettings](/vext/ref/fb/datacopsettings) frostbite instance.

### DataCopSettings {#constructor-1}

> **DataCopSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DataCopSettings](/vext/ref/fb/datacopsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "values" %}}

> **[DataCopValueSetting](/vext/ref/fb/datacopvaluesetting)**[]

## Methods

### Clone {#clone}

> **Clone**(): [DataCopSettings](/vext/ref/fb/datacopsettings)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataCopSettings](/vext/ref/fb/datacopsettings)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DataCopSettings](/vext/ref/fb/datacopsettings) type.

