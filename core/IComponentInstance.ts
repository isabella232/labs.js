//
// Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

module Labs.Core {    
    /**
     * Base class for instances of a lab component. An instance is an instantiation of a component for a user. It contains
     * a translated view of the component for a particular run of the lab. This view may exclude hidden information (answers, hints, etc...)
     * and also contains IDs to identify the various instances.
     */
    export interface IComponentInstance extends ILabObject, IUserData {
        /**
         * The ID of the component this instance is associated with
         */        
        componentId: string;

        /**
         * The name of the component
         */        
        name: string;

        /**
         * value property map associated with the component
         */        
        values: { [type: string]: IValueInstance[]; };
    }
}
