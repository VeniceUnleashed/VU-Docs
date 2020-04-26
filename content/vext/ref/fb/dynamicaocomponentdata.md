---
title: DynamicAOComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[DynamicAOComponentData](#constructor-0)**() |
| **[DynamicAOComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DynamicAOComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[DynamicAOComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DynamicAOComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DynamicAOComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "ssaoMaxDistanceOuter" >}} | float |
| {{< prop "ssaoFade" >}} | float |
| {{< prop "ssaoRadius" >}} | float |
| {{< prop "ssaoMaxDistanceInner" >}} | float |
| {{< prop "hbaoRadius" >}} | float |
| {{< prop "hbaoAttenuation" >}} | float |
| {{< prop "hbaoAngleBias" >}} | float |
| {{< prop "hbaoPowerExponent" >}} | float |
| {{< prop "hbaoContrast" >}} | float |
| {{< prop "hbaoMaxFootprintRadius" >}} | float |
| {{< prop "enable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DynamicAOComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DynamicAOComponentData {#constructor-0}

> **DynamicAOComponentData**()

Creates a new [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata) frostbite instance.

### DynamicAOComponentData {#constructor-1}

> **DynamicAOComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DynamicAOComponentData {#constructor-2}

> **DynamicAOComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata). |

### DynamicAOComponentData {#constructor-3}

> **DynamicAOComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata). |

### DynamicAOComponentData {#constructor-4}

> **DynamicAOComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata). |

### DynamicAOComponentData {#constructor-5}

> **DynamicAOComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "ssaoMaxDistanceOuter" %}}

> **float**

### {{% prop-heading "ssaoFade" %}}

> **float**

### {{% prop-heading "ssaoRadius" %}}

> **float**

### {{% prop-heading "ssaoMaxDistanceInner" %}}

> **float**

### {{% prop-heading "hbaoRadius" %}}

> **float**

### {{% prop-heading "hbaoAttenuation" %}}

> **float**

### {{% prop-heading "hbaoAngleBias" %}}

> **float**

### {{% prop-heading "hbaoPowerExponent" %}}

> **float**

### {{% prop-heading "hbaoContrast" %}}

> **float**

### {{% prop-heading "hbaoMaxFootprintRadius" %}}

> **float**

### {{% prop-heading "enable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DynamicAOComponentData](/vext/ref/fb/dynamicaocomponentdata) type.

