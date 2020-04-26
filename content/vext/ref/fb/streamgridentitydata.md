---
title: StreamGridEntityData
---

Inherits from [SpatialEntityData](/vext/ref/fb/spatialentitydata)

## Summary

### Constructors

|  |
| --- |
| **[StreamGridEntityData](#constructor-0)**() |
| **[StreamGridEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StreamGridEntityData](#constructor-2)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[StreamGridEntityData](#constructor-3)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[StreamGridEntityData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[StreamGridEntityData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[StreamGridEntityData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "cellSize" >}} | float |
| {{< prop "viewDistance" >}} | float |
| {{< prop "maxStreamInCountPerFrame" >}} | int |
| {{< prop "maxStreamOutCountPerFrame" >}} | int |
| {{< prop "cells" >}} | [StreamGridCell](/vext/ref/fb/streamgridcell)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StreamGridEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StreamGridEntityData {#constructor-0}

> **StreamGridEntityData**()

Creates a new [StreamGridEntityData](/vext/ref/fb/streamgridentitydata) frostbite instance.

### StreamGridEntityData {#constructor-1}

> **StreamGridEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StreamGridEntityData](/vext/ref/fb/streamgridentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StreamGridEntityData {#constructor-2}

> **StreamGridEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). |

### StreamGridEntityData {#constructor-3}

> **StreamGridEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). |

### StreamGridEntityData {#constructor-4}

> **StreamGridEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). |

### StreamGridEntityData {#constructor-5}

> **StreamGridEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). |

### StreamGridEntityData {#constructor-6}

> **StreamGridEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata). |

## Properties

### {{% prop-heading "cellSize" %}}

> **float**

### {{% prop-heading "viewDistance" %}}

> **float**

### {{% prop-heading "maxStreamInCountPerFrame" %}}

> **int**

### {{% prop-heading "maxStreamOutCountPerFrame" %}}

> **int**

### {{% prop-heading "cells" %}}

> **[StreamGridCell](/vext/ref/fb/streamgridcell)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StreamGridEntityData](/vext/ref/fb/streamgridentitydata) type.

