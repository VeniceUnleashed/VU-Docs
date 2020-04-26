---
title: RagdollComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[RagdollComponentData](#constructor-0)**() |
| **[RagdollComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RagdollComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[RagdollComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RagdollComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RagdollComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "skeletonAsset" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |
| {{< prop "ragdollAsset" >}} | [RagdollAsset](/vext/ref/fb/ragdollasset) \| nil |
| {{< prop "skeletonCollisionData" >}} | [SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata) \| nil |
| {{< prop "binding" >}} | [RagdollBinding](/vext/ref/fb/ragdollbinding) |
| {{< prop "leftLegBoneName" >}} | string |
| {{< prop "rightLegBoneName" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RagdollComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RagdollComponentData {#constructor-0}
> **RagdollComponentData**()

Creates a new [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata) frostbite instance.

### RagdollComponentData {#constructor-1}
> **RagdollComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RagdollComponentData {#constructor-2}
> **RagdollComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata). |

### RagdollComponentData {#constructor-3}
> **RagdollComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata). |

### RagdollComponentData {#constructor-4}
> **RagdollComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata). |

### RagdollComponentData {#constructor-5}
> **RagdollComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata). |

## Properties
### {{% prop-heading "skeletonAsset" %}}
> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** | **nil**

### {{% prop-heading "ragdollAsset" %}}
> **[RagdollAsset](/vext/ref/fb/ragdollasset)** | **nil**

### {{% prop-heading "skeletonCollisionData" %}}
> **[SkeletonCollisionData](/vext/ref/fb/skeletoncollisiondata)** | **nil**

### {{% prop-heading "binding" %}}
> **[RagdollBinding](/vext/ref/fb/ragdollbinding)**

### {{% prop-heading "leftLegBoneName" %}}
> **string**

### {{% prop-heading "rightLegBoneName" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RagdollComponentData](/vext/ref/fb/ragdollcomponentdata) type.

