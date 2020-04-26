---
title: AmmoCrateEntityData
---

Inherits from [GameEntityData](/vext/ref/fb/gameentitydata)

## Summary

### Constructors

|  |
| --- |
| **[AmmoCrateEntityData](#constructor-0)**() |
| **[AmmoCrateEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AmmoCrateEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[AmmoCrateEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[AmmoCrateEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AmmoCrateEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AmmoCrateEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AmmoCrateEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "marker" >}} | [MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata) \| nil |
| {{< prop "model" >}} | [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata) \| nil |
| {{< prop "refillDelay" >}} | float |
| {{< prop "radius" >}} | float |
| {{< prop "enableReplenish" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AmmoCrateEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AmmoCrateEntityData {#constructor-0}

> **AmmoCrateEntityData**()

Creates a new [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata) frostbite instance.

### AmmoCrateEntityData {#constructor-1}

> **AmmoCrateEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AmmoCrateEntityData {#constructor-2}

> **AmmoCrateEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). |

### AmmoCrateEntityData {#constructor-3}

> **AmmoCrateEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). |

### AmmoCrateEntityData {#constructor-4}

> **AmmoCrateEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). |

### AmmoCrateEntityData {#constructor-5}

> **AmmoCrateEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). |

### AmmoCrateEntityData {#constructor-6}

> **AmmoCrateEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). |

### AmmoCrateEntityData {#constructor-7}

> **AmmoCrateEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata). |

## Properties

### {{% prop-heading "marker" %}}

> **[MapMarkerEntityData](/vext/ref/fb/mapmarkerentitydata)** \| **nil**

### {{% prop-heading "model" %}}

> **[StaticModelEntityData](/vext/ref/fb/staticmodelentitydata)** \| **nil**

### {{% prop-heading "refillDelay" %}}

> **float**

### {{% prop-heading "radius" %}}

> **float**

### {{% prop-heading "enableReplenish" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AmmoCrateEntityData](/vext/ref/fb/ammocrateentitydata) type.

