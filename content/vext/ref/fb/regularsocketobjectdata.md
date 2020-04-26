---
title: RegularSocketObjectData
---

Inherits from [SocketObjectData](/vext/ref/fb/socketobjectdata)

## Summary

### Constructors

|  |
| --- |
| **[RegularSocketObjectData](#constructor-0)**() |
| **[RegularSocketObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RegularSocketObjectData](#constructor-2)**(other: [SocketObjectData](/vext/ref/fb/socketobjectdata)) |
| **[RegularSocketObjectData](#constructor-3)**(other: [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase)) |
| **[RegularSocketObjectData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "mesh3pTransforms" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RegularSocketObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RegularSocketObjectData {#constructor-0}

> **RegularSocketObjectData**()

Creates a new [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata) frostbite instance.

### RegularSocketObjectData {#constructor-1}

> **RegularSocketObjectData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RegularSocketObjectData {#constructor-2}

> **RegularSocketObjectData**(other: [SocketObjectData](/vext/ref/fb/socketobjectdata))

Casts an instance of type [SocketObjectData](/vext/ref/fb/socketobjectdata) to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SocketObjectData](/vext/ref/fb/socketobjectdata) | The instance to cast to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). |

### RegularSocketObjectData {#constructor-3}

> **RegularSocketObjectData**(other: [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase))

Casts an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase) to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase) | The instance to cast to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). |

### RegularSocketObjectData {#constructor-4}

> **RegularSocketObjectData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). |

## Properties

### {{% prop-heading "transform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "mesh3pTransforms" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata) type.

