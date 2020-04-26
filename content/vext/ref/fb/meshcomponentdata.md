---
title: MeshComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[MeshComponentData](#constructor-0)**() |
| **[MeshComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MeshComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[MeshComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MeshComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MeshComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "boneFakePhysics" >}} | [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata)[] |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "skeleton" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MeshComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MeshComponentData {#constructor-0}
> **MeshComponentData**()

Creates a new [MeshComponentData](/vext/ref/fb/meshcomponentdata) frostbite instance.

### MeshComponentData {#constructor-1}
> **MeshComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MeshComponentData](/vext/ref/fb/meshcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MeshComponentData {#constructor-2}
> **MeshComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [MeshComponentData](/vext/ref/fb/meshcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [MeshComponentData](/vext/ref/fb/meshcomponentdata). |

### MeshComponentData {#constructor-3}
> **MeshComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MeshComponentData](/vext/ref/fb/meshcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MeshComponentData](/vext/ref/fb/meshcomponentdata). |

### MeshComponentData {#constructor-4}
> **MeshComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MeshComponentData](/vext/ref/fb/meshcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MeshComponentData](/vext/ref/fb/meshcomponentdata). |

### MeshComponentData {#constructor-5}
> **MeshComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshComponentData](/vext/ref/fb/meshcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MeshComponentData](/vext/ref/fb/meshcomponentdata). |

## Properties
### {{% prop-heading "boneFakePhysics" %}}
> **[BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata)**[]

### {{% prop-heading "mesh" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "skeleton" %}}
> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MeshComponentData](/vext/ref/fb/meshcomponentdata) type.

