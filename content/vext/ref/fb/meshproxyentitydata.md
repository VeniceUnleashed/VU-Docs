---
title: MeshProxyEntityData
---

Inherits from 
[SpatialEntityData](/vext/ref/fb/spatialentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[MeshProxyEntityData](#constructor-0)**() |
| **[MeshProxyEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshProxyEntityData](#constructor-2)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[MeshProxyEntityData](#constructor-3)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MeshProxyEntityData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MeshProxyEntityData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MeshProxyEntityData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "basePoseTransforms" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshProxyEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshProxyEntityData {#constructor-0}
> **MeshProxyEntityData**()

Creates a new [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata) frostbite instance.

### MeshProxyEntityData {#constructor-1}
> **MeshProxyEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshProxyEntityData {#constructor-2}
> **MeshProxyEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). |

### MeshProxyEntityData {#constructor-3}
> **MeshProxyEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). |

### MeshProxyEntityData {#constructor-4}
> **MeshProxyEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). |

### MeshProxyEntityData {#constructor-5}
> **MeshProxyEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). |

### MeshProxyEntityData {#constructor-6}
> **MeshProxyEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata). |

## Properties
### {{% prop-heading "mesh" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "basePoseTransforms" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshProxyEntityData](/vext/ref/fb/meshproxyentitydata) type.

