---
title: EntityTransformData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[EntityTransformData](#constructor-0)**() |
| **[EntityTransformData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EntityTransformData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entityTransforms" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EntityTransformData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EntityTransformData {#constructor-0}

> **EntityTransformData**()

Creates a new [EntityTransformData](/vext/ref/fb/entitytransformdata) frostbite instance.

### EntityTransformData {#constructor-1}

> **EntityTransformData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EntityTransformData](/vext/ref/fb/entitytransformdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EntityTransformData {#constructor-2}

> **EntityTransformData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EntityTransformData](/vext/ref/fb/entitytransformdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EntityTransformData](/vext/ref/fb/entitytransformdata). |

## Properties

### {{% prop-heading "entityTransforms" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EntityTransformData](/vext/ref/fb/entitytransformdata) type.

