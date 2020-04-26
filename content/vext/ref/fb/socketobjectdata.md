---
title: SocketObjectData
---

Inherits from [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase)

## Summary

### Constructors

|  |
| --- |
| **[SocketObjectData](#constructor-0)**() |
| **[SocketObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SocketObjectData](#constructor-2)**(other: [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase)) |
| **[SocketObjectData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "asset1pGuid" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "variation1pGuids" >}} | [Guid](/vext/ref/shared/type/guid)[] |
| {{< prop "asset1pZoomGuid" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "variation1pZoomGuids" >}} | [Guid](/vext/ref/shared/type/guid)[] |
| {{< prop "asset3pGuid" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "variation3pGuids" >}} | [Guid](/vext/ref/shared/type/guid)[] |
| {{< prop "customizedMaterials" >}} | [CustomizedMaterialData](/vext/ref/fb/customizedmaterialdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SocketObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SocketObjectData {#constructor-0}

> **SocketObjectData**()

Creates a new [SocketObjectData](/vext/ref/fb/socketobjectdata) frostbite instance.

### SocketObjectData {#constructor-1}

> **SocketObjectData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SocketObjectData](/vext/ref/fb/socketobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SocketObjectData {#constructor-2}

> **SocketObjectData**(other: [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase))

Casts an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase) to [SocketObjectData](/vext/ref/fb/socketobjectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase) | The instance to cast to [SocketObjectData](/vext/ref/fb/socketobjectdata). |

### SocketObjectData {#constructor-3}

> **SocketObjectData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SocketObjectData](/vext/ref/fb/socketobjectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SocketObjectData](/vext/ref/fb/socketobjectdata). |

## Properties

### {{% prop-heading "asset1pGuid" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "variation1pGuids" %}}

> **[Guid](/vext/ref/shared/type/guid)**[]

### {{% prop-heading "asset1pZoomGuid" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "variation1pZoomGuids" %}}

> **[Guid](/vext/ref/shared/type/guid)**[]

### {{% prop-heading "asset3pGuid" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "variation3pGuids" %}}

> **[Guid](/vext/ref/shared/type/guid)**[]

### {{% prop-heading "customizedMaterials" %}}

> **[CustomizedMaterialData](/vext/ref/fb/customizedmaterialdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SocketObjectData](/vext/ref/fb/socketobjectdata) type.

