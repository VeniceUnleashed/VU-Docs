---
title: CustomReportValueData
---

## Summary

### Constructors

|  |
| --- |
| **[CustomReportValueData](#constructor-0)**() |
| **[CustomReportValueData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "kind" >}} | [CustomReportValueKind](/vext/ref/fb/customreportvaluekind) |
| {{< prop "dataType" >}} | [PersistentValueDataType](/vext/ref/fb/persistentvaluedatatype) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CustomReportValueData](/vext/ref/fb/customreportvaluedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CustomReportValueData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CustomReportValueData {#constructor-0}

> **CustomReportValueData**()

Creates a new [CustomReportValueData](/vext/ref/fb/customreportvaluedata) frostbite instance.

### CustomReportValueData {#constructor-1}

> **CustomReportValueData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CustomReportValueData](/vext/ref/fb/customreportvaluedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "kind" %}}

> **[CustomReportValueKind](/vext/ref/fb/customreportvaluekind)**

### {{% prop-heading "dataType" %}}

> **[PersistentValueDataType](/vext/ref/fb/persistentvaluedatatype)**

## Methods

### Clone {#clone}

> **Clone**(): [CustomReportValueData](/vext/ref/fb/customreportvaluedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CustomReportValueData](/vext/ref/fb/customreportvaluedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CustomReportValueData](/vext/ref/fb/customreportvaluedata) type.

